// QA-only thumbnails of original assets. No website image is changed.
const sharp = require('sharp'), fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const output=path.join(root,'first-aid-game/qa-output/i18n');
fs.mkdirSync(output,{recursive:true});
const set=new Set();
for(const file of ['index.html','about.html','courses/program-1.html','courses/program-2.html']) {
 const html=fs.readFileSync(path.join(root,file),'utf8');
 for(const match of html.matchAll(/src="([^"?]+\.(?:webp|png|jpg|svg))"/g)) set.add(path.resolve(root,path.dirname(file),match[1]));
}
for(const name of fs.readdirSync(path.join(root,'assets/first-aid/images'))) set.add(path.join(root,'assets/first-aid/images',name));
for(const name of ['certificate-completion.webp','certificate-recognition.webp','certificates-combined.png','footer-reference.png','banner_02.png'])set.add(path.join(root,'assets/images',name));
function scan(directory) {
 for(const entry of fs.readdirSync(directory,{withFileTypes:true})) {
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())scan(file);
  else if(/\.(?:webp|png|jpg|svg)$/i.test(entry.name))set.add(file);
 }
}
scan(path.join(root,'assets/images'));
(async()=>{
 const files=[...set];
 for(let batch=0;batch<files.length;batch+=24) {
  const group=files.slice(batch,batch+24),composites=[];
  for(let i=0;i<group.length;i++) {
   const image=await sharp(group[i]).resize(320,200,{fit:'contain',background:'#f3f3f3'}).png().toBuffer();
   const label=path.relative(root,group[i]).replace(/&/g,'&amp;');
   const caption=Buffer.from(`<svg width="320" height="36"><rect width="320" height="36" fill="white"/><text x="6" y="14" font-size="10" font-family="Arial">${label.slice(0,49)}</text><text x="6" y="29" font-size="10" font-family="Arial">${label.slice(49)}</text></svg>`);
   const left=(i%4)*320,top=Math.floor(i/4)*236;
   composites.push({input:image,left,top},{input:caption,left,top:top+200});
  }
  await sharp({create:{width:1280,height:Math.ceil(group.length/4)*236,channels:3,background:'white'}}).composite(composites).png().toFile(path.join(output,`assets-${batch/24+1}.png`));
 }
 console.log(`${files.length} original assets inventoried in ${Math.ceil(files.length/24)} QA sheets.`);
})().catch(e=>{console.error(e);process.exitCode=1});
