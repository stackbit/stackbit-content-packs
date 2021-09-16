const nodegit = require("nodegit");
const fs = require("fs-extra");
const path = require("path")

const token = process.env.GITHUB_TOKEN

if (!token) {
  throw new Error(
      'Cannot access Github API - environment variable "GITHUB_TOKEN" is missing'
  )
}

const themesManifestFile = path.join(__dirname, './manifest.json');
const themesManifestData = fs.existsSync(themesManifestFile) ? JSON.parse(fs.readFileSync(themesManifestFile)) : null;

if (!themesManifestData) {
  throw new Error(
      'Cannot access Github API - environment variable "GITHUB_TOKEN" is missing'
  )
}

const tmpFolderPath = path.join(__dirname, 'tmp');
const baseFolderPath = path.join(tmpFolderPath, 'base');
const demoFolderPath = path.join(tmpFolderPath, 'demos');

// Clear any exsting demos
fs.removeSync(demoFolderPath);

if (!fs.existsSync(baseFolderPath)) {
  // Clone the base repo if it does not already exist
  const cloneUrl = "git@github.com:stackbit-themes/stackbit-nextjs-v2.git"
  const cloneOptions = {
    fetchOpts: {
      callbacks: {
        certificateCheck: function() { return 1; },
        credentials: function(url, userName) {
          console.log(url, userName)
          return nodegit.Cred.sshKeyFromAgent(userName);
        }
      }
    }
  }
  
  console.log("Cloning", cloneUrl)

  nodegit.Clone(cloneUrl, baseFolderPath, cloneOptions).then(function(repo) {
    // Delete the .git folder to detach from git
    fs.removeSync(path.join(baseFolderPath, '.git'))
    // Delete content in the base
    fs.removeSync(path.join(baseFolderPath, 'content'))
    // Delete public in the base
    fs.removeSync(path.join(baseFolderPath, 'public'))
    
    buildDemos();
    return repo
  }).catch(err => {
    console.log(err);
    return false;
  });
} else {
  buildDemos();
}

function buildDemos() {
  Object.keys(themesManifestData.themes).forEach((themeName, index) => {
    console.log("Building Theme:", themeName)
    generateContent(themeName)
    generateStyles(themeName)
  })
}

function generateContent(themeName) {
  const themeContentFolderPath = path.join(__dirname, themeName);
  const themeDemoFolderPath = path.join(demoFolderPath, themeName);
  
  // Copy the base
  console.log(`Copying Base: ${baseFolderPath} => ${themeDemoFolderPath}`)
  fs.copySync(baseFolderPath, themeDemoFolderPath)
  // Copy the content
  console.log(`Copying Content: ${themeContentFolderPath} => ${themeDemoFolderPath}`)
  fs.copySync(themeContentFolderPath, themeDemoFolderPath);
}

function generateStyles(themeName) {
  const style = themesManifestData.themes[themeName].style;
  const tailwindConfig = `tailwind.${style}.config.js`
  console.log(`Generating tailwind.config: ${tailwindConfig}`)
  const data = fs.readFileSync(path.join(baseFolderPath, 'tailwind.config.js'), 'utf-8');
  const newData = data.replace("presets: [require('@stackbit/components/themes/tailwind.default.config')],", `presets: [require('@stackbit/components/themes/${tailwindConfig}')],`);
  fs.writeFileSync(path.join(__dirname, 'tmp/demos', themeName, 'tailwind.config.js'), newData, 'utf-8');

  
  console.log(`Generating theme.css`)
  const css = `@import '@stackbit/components/themes/${themeName}/theme.css'`;
  fs.writeFileSync(path.join(__dirname, 'tmp/demos/', themeName, 'src/css/', 'theme.css'), css, 'utf8');
};
