export async function navbarUi(app) {
  let nav = document.getElementById('navbar')
  if (!nav) {
    nav = document.createElement('nav')
    nav.id = "navbar"
    app.prepend(nav)
  }

  nav.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; background-color: white; padding: 10px; border-bottom: 1px solid #ccc; height: 45px;" id="top-nav">
      <div style="font-size: 14px; font-weight: bold; color: #6f2da8; display: flex; padding: 10px 0; justify-content: space-between;">
        <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/Copilot_20251101_191415.ico" style="width: 40px; height: 40px; margin-top: -5px;">
        <span style="color: #1ABC9C; padding-top: 5px; margin-left: 0px; font-size: 18px;">CatchaPay</span>
      </div>
      <div style="background-color: white; color: #1ABC9C; padding: 5px 10px; border-radius: 5px; font-weight: bold; margin-left: 130px;">0 CP</div>
      <div id="setting-bubble">
        <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/settings.png" style="width: 30px; height: 30px; border-radius: 50%;">
      </div>
    </div>
  `

  const setting = document.getElementById('setting-bubble')

  async function naver(app) {
    let naver = document.getElementById('naverLeft')

    if (!naver) {
      naver = document.createElement('div')
      naver.id = "naverLeft"
      naver.style = `
      visibility:hidden;
        position: fixed; right:0;top:0;
        width: 280px;
        height: 0;
        background-color: white;
        box-shadow: 2px 0 8px rgba(0,0,0,0.1);
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom:20px;
        padding-top: 2px;
        display: flex;
        z-index: 10;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
        transition-duration: 0.8s;
      `
      app.appendChild(naver)
    }

    naver.innerHTML = `
       <div >
      <h3 style="color: #1ABC9C; margin-top: 10px;"><b>setting</b></h3> <span id="canceler" style="position: absolute; right:5px; font-size: 26px;color:black; top:0;right:10px; ">&times;</span>
           <hr style="margin-top: -10px;">
  
      <div style="margin-top: 30px; ">
        <div style="padding: 12px 0; border-bottom: 0px solid #eee; width: 95%;position: relative; right: -15px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/bell (1).png" style="width:25px;height:25px; top:-10px; position: relative;">
          <span href="#" style="text-decoration: none; color: #333; font-size: 16px; position: relative; top: -15px; margin-left: 2px;">Notification</span>
          <hr style="margin-top: -5px; background-color: #1ABC9C;">
        </div>

        <div style="">
        <div style="padding: 12px 0; border-bottom: 0px solid #eee; width: 95%;position: relative; right: -15px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/languages-world.png" style="width:25px;height:25px; top:-10px; position: relative;">
          <span href="#" style="text-decoration: none; color: #333; font-size: 16px; position: relative; top: -15px; margin-left: 2px;">Language</span> <select style="position: absolute; right:0;margin-top:-5px; border:none;background:white;outline:none;"><option value="en">English</option><option value="an">Ahmaric</option></select>
          <hr style="margin-top: -5px;">
        </div>
        <div style="">
        <div style="padding: 12px 0; border-bottom: 0px solid #eee;width: 95%;position: relative; right: -15px;"><img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/transaction-euro.png" style="width:25px;height:25px; top:-10px; position: relative; ">
          <span href="#" style="text-decoration: none;position: relative; color: #333; font-size: 16px;top: -15px; margin-top: 2px;">Currency</span> <select style="position: absolute; right:0;margin-top:-5px; border:none;background:white;outline:none;"><option>ETB</option><option>CP</option></select>
          <hr style="margin-top: -5px;">
        </div>
        </div>
        <div style="border: 0px solid black;">
           <button style="padding: 12px 0; width:80%; margin-left: 30px; background: white; color: black; border: 1px groove black; border-radius: 5px; ">
          <span href="#" style="text-decoration: none; color: black;">Logout </span>
        </button>
        <div style="padding:10px; ">
          <button href="#" 
          style="text-decoration: none; color: #333; background: #1ABC9C;
          color: white;  border:1px solid #1ABC9C; width: 95%; height: 40px; border-radius: 8px; 
          margin-left: 5px; diplay:flex;">
            <span style="position: relative;left:20px;top: -5px;">Help and support</span>
            <img src="https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/interrogation.png" style="width:20px;height:20px; margin-left: 40px; z-index: 11;"> </button>
        </div>
       
        <div>
        </div>
        <div>
        <button style="text-decoration: none; color: #333; background: white;  color: red;  border:1px solid red; width: 100%; height: 40px; border-radius: 8px; margin-left: 5px;">
          <span>Delete Acount</span>
        </button>
        </div>
      </div>
    </div>

    <!-- Bottom Section -->
    <div style="border: 0px solid black; margin-top: 100px; position: relative; ">
      <div style="margin-bottom: 15px; text-align: center; font-size:16px; line-height: 1.5;">
        <a href="#" style="text-decoration: none; color: #666; display: block; margin-bottom: 5px;">Terms of Service</a>
        <a href="#" style="text-decoration: none; color: #666; display: block; margin-bottom: 5px;">Privacy Policy</a>
        <a href="#" style="text-decoration: none; color: #666;">Giveaway Rules</a>
      </div>

     
      <div style="text-align: center; font-size: 12px; color: #888; ">
        <strong style="color: #1ABC9C;">Catcha</strong><strong style="color:black;" >Pay</strong><br>
        © All Rights Reserved By CatchaPay<br>
        CatchaPay is intended for use only within the ethiopia.
      </div>
    </div>
    `

    const cancel = document.getElementById('canceler')
    cancel.addEventListener("click", () => {
      naver.style.height = "0"
      naver.style.visibility = "hidden"
    })
  }

  await naver(app)

  // ✅ spinner setup
  let load = document.getElementById('spinner')
  if (!load) {
    load = document.createElement('div')
    load.id = "spinner"
    load.style.display = "none"
    setting.appendChild(load)
  }

  // ✅ save original content AFTER spinner is added
  const originalContent = setting.innerHTML

setting.addEventListener("click", () => {
  setting.innerHTML = ""
  setting.appendChild(load)
  load.style.display = "block"

  const naverBox = document.getElementById("naverLeft")

  // ✅ FIX: visibility applied to the real element
  naverBox.style.visibility = "visible"

  // open sidebar
  naverBox.style.height = "100vh"

  // restore content after animation
  setTimeout(() => {
    load.style.display = "none"
    setting.innerHTML = originalContent
  }, 600)
})
}