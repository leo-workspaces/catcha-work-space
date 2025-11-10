
export async function navbarUi(app) {
  let nav = document.getElementById('navbar')
  if (!nav) {
    nav = document.createElement('nav')
    nav.id = "navbar"
    app.prepend(nav)
    
  }
  nav.innerHTML = ` <div style="display: flex; align-items: center; justify-content: space-between; background-color: white; padding: 10px; border-bottom: 1px solid #ccc; height: 45px;" id="top-nav">
        <div style="font-size: 14px; font-weight: bold; color: #6f2da8; display: flex; padding: 10px 0; justify-content: space-between;">
          <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Copilot_20251101_191415.ico" style="width: 40px; height: 40px; margin-top: -5px;">
          <span style="color: #1ABC9C; padding-top: 5px; margin-left: 0px; font-size: 18px;">CatchaPay</span>
        </div>
        <div style="background-color: white; color: #1ABC9C; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-left: 130px;">
          0 CP
        </div>
        <div id="setting-bubble">
          <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/settings.png" style="width: 30px; height: 30px; border-radius: 50%;">
        </div>
      </div>
    `
}