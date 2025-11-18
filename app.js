
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

export async function botomNav(app){
 var bnav = document.getElementById('BottomNav')
 if(!bnav){
  bnav =  document.createElement('div')
  bnav.id = "BottomNav"
  bnav.style = " position:fixed;bottom:0;"
  document.body.insertAdjacentElement("beforeend",bnav)
 }
 bnav.innerHTML = `<nav data-set="bottom-Nav" id="Nav-All">
  <div style="
    display:flex;
    justify-content:space-around;
    background:white;
    padding:10px 0;
    position:fixed;
    bottom:0;
    width:100%;
    border-top:1px solid white;
    box-shadow:0 -12px 10px 2px rgba(0,0,0,0.1);
  ">

    <!-- HOME -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#388c82;
      font-size:12px;width:50px;height:50px;padding-left:5px;
      padding-right:10px;transition:0.1s;
    "
    onmouseenter="this.style.background='#388c82'; this.style.color='white'; this.querySelector('img').style.filter='brightness(0) saturate(100%) invert(100%)';"
    onmouseleave="this.style.background='transparent'; this.style.color='#388c82'; this.querySelector('img').style.filter='none';">

      <div style="width:30px;height:30px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/house-chimney (1).png'
        style="width:25px;height:25px;padding-top:1px;">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Home</span>
    </div>

    <!-- GIVEAWAY -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#388c82;
      font-size:12px;width:50px;height:50px;padding-left:5px;
      padding-right:10px;transition:0.01s;
    "
    onmouseenter="this.style.background='#388c82'; this.style.color='white'; this.querySelector('img').style.filter='brightness(0) saturate(100%) invert(100%)';"
    onmouseleave="this.style.background='transparent'; this.style.color='#388c82'; this.querySelector('img').style.filter='none';">

      <div style="width:30px;height:30px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/gift (1).png'
        style="width:25px;height:25px;padding-top:1px;">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Giveaway</span>
    </div>

    <!-- WITHDRAW -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#388c82;
      font-size:12px;width:50px;height:50px;padding-left:5px;
      padding-right:10px;transition:0.2s;
    "
    onmouseenter="this.style.background='#388c82'; this.style.color='white'; this.querySelector('img').style.filter='brightness(0) saturate(100%) invert(100%)';"
    onmouseleave="this.style.background='transparent'; this.style.color='#388c82'; this.querySelector('img').style.filter='none';">

      <div style="width:30px;height:30px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/box-dollar (1).png'
        style="width:25px;height:25px;padding-top:1px;">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Withdraw</span>
    </div>

    <!-- ME -->
    <div style="
      text-align:center;flex:1;border-radius:7.5px;color:#388c82;
      font-size:12px;width:50px;height:50px;padding-left:5px;
      padding-right:10px;transition:0.2s;
    "
    onmouseenter="this.style.background='#388c82'; this.style.color='white'; this.querySelector('img').style.filter='brightness(0) saturate(100%) invert(100%)';"
    onmouseleave="this.style.background='transparent'; this.style.color='#388c82'; this.querySelector('img').style.filter='none';">

      <div style="width:30px;height:30px;margin:0 auto;">
        <img src='https://cdn.jsdelivr.net/gh/fieme-one/Quick-web-imd-data@main/circle-user (1).png'
        style="width:25px;height:25px;padding-top:1px;">
      </div>
      <span style="display:block;margin-top:5px;font-size:11px;">Me</span>
    </div>

  </div>
</nav>`
 

 
}
import { supabase } from "https://cdn.jsdelivr.net/gh/fieme-one/Server@main/supabaseJS.js";

export async function login() {
  var loginUi = document.getElementById("loginUi");
  if (!loginUi) {
    loginUi = document.createElement("div");
    loginUi.id = "loginUi";
    loginUi.style = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background-color: rgba(26,188,156,0.4);
      backdrop-filter: blur(20px);
      display: flex; justify-content: center; align-items: center; z-index:10000;
    `;
    document.body.appendChild(loginUi);
  }

  const originalLogin = `
    <div style="max-width:300px;padding:20px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;">
      <div id="cancelerLogin">&times;</div>
      <h2>Log in to CatchaPay</h2>
      <input id="emailBox" type="email" placeholder="Enter Email" style="width:95%;padding:10px;margin-bottom:15px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <input id="passwordBox" type="password" placeholder="Enter Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
      <button style="width:100%;background-color:#1ABC9C;color:white;padding:10px;border:none;border-radius:20px;font-size:16px;margin-top:15px;" id="loginBox">Log in</button>
      <div style="text-align:center;margin-top:20px;">
        <span>Don't have an account?</span>
        <button style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px;" id="signChange">Sign up</button>
      </div>
    </div>
  `;
  
  loginUi.innerHTML = originalLogin;

  // signup UI switch
  function signupUI() {
    loginUi.innerHTML = `
      <div style="max-width:300px;padding:20px;background:white;border-radius:15px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;" id="signup">
        <div id="cancelerLogin">&times;</div>
        <h2>Sign up to CatchaPay</h2>
        <input id="emails" type="email" placeholder="Enter Email" style="width:95%;padding:10px;margin-bottom:15px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
        <input id="passwordlss" type="password" placeholder="Enter Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;">
        <input id="ConfirmPass" type="password" placeholder="Confirm Password" style="width:95%;padding:10px;border:1.5px solid #ccc;border-radius:20px;font-size:16px;outline:none;margin-top:10px;">
        <button id="signupO" style="width:100%;background-color:#1ABC9C;color:white;padding:10px;border:none;border-radius:20px;font-size:16px;margin-top:15px;">Sign up</button>
        <div style="text-align:center;margin-top:20px;">
          <span>Already have an account?</span>
          <button id="loginChange" style="background-color:#1ABC9C;color:white;border:none;padding:6px 12px;border-radius:6px;font-size:14px;margin-left:5px;">Login</button>
        </div>
      </div>
    `;
  }

  // Handle clicks
  loginUi.addEventListener("click", async (event) => {
    const t = event.target;

    if (t.id === "cancelerLogin") {
      loginUi.remove();
      return;
    }

    if (t.id === "signChange") {
      signupUI();
      return;
    }

    if (t.id === "loginChange") {
      loginUi.innerHTML = originalLogin;
      return;
    }

    // SIGNUP BUTTON
    if (t.id === "signupO") {
      document.getElementById("LoaderIndicator").style.display = "block";

      const email = document.getElementById("emails").value.trim();
      const password = document.getElementById("passwordlss").value.trim();
      const confirm = document.getElementById("ConfirmPass").value.trim();

      if ( confirm !== password) {
       alert("please make the password")
        document.getElementById('LoaderIndicator').style.display="none"
        return;
      }

      try {
        const { data, error } = await supabase.auth.signUp({ email, password });

        if (error) {
          alert("Failed to signup: " + error.message);
          document.getElementById("LoaderIndicator").style.display = "none";
          return;
        }

        const userId = data.user.id;
        const name = email.split("@")[0];

        const { data: tableData, error: err } = await supabase.rpc(
          "insert_profile_for_user",
          {
            p_user_id: userId,
            p_email: email,
            p_name: name
          }
        );

        if (err) {
          alert("Failed to insert Data: " + err.message);
        } else {
          alert("Signed up successfully!");
        }
        
      

      } catch (e) {
        console.error(e);
        alert("Unexpected error occurred!");
      }

      document.getElementById("LoaderIndicator").style.display = "none";
      
      
     
    }
    //login
     if(t.id === "loginBox"){
        document.getElementById('LoaderIndicator').style.display="block"
        const email = document.getElementById('emailBox').value.trim()
        const password = document.getElementById('passwordBox').value.trim()
        
        if(!password || !email){
          alert("please fill your email or password")
          document.getElementById('LoaderIndicator').style.display="none"
          return;
        }
        
        const {data, error} = await supabase.auth.signInWithPassword({email,password})
       
       if(error){
      var load  = document.getElementById('LoaderIndicator')
      load.innerHTML = "wrong password or email"
      load.style.color="red"
      load.style.width ="auto"
      load.style.padding ="10px"
      setTimeout(() =>{
        load.innerHTML = `<div></div>`
        load.style.width="100px"
        load.style.padding ="0"
        load.style.display = "none"
      },1000)
       } 
       
        else{ alert("login successfully")
          document.getElementById('LoaderIndicator').style.display="none"
          console.log(data.user.id)
        }
        
        
      }
  });
}