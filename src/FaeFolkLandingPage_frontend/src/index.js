const mac_build = "https://faefolk.nyc3.cdn.digitaloceanspaces.com/faefolk.dmg";
const windows_build = "https://faefolk.nyc3.cdn.digitaloceanspaces.com/faefolk.exe";
const linux_build = "https://faefolk.nyc3.cdn.digitaloceanspaces.com/faefolk.x86_64";
document.querySelector(".playButton").addEventListener("click", async (e) => {
  let OSName = "Unknown OS";
  if (navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
  if (navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
  if (navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";


  
  switch(OSName) {
    case "Macintosh": 
      download(mac_build, "dmg");
      break;
    case "Windows":
      download(windows_build, "exe");
      break;
    case "Linux":
      download(linux_build, "x86_64");
      break;
    default: 
      document.getElementById("dialog").style.display = "block"
  }

  return false;
});


function download(dataurl, ext) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = `faefolk.${ext}`;
  link.click();
}

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  document.getElementById("dialog2").style.display = "block"
  document.getElementById("playButton").style.display = "none";
}