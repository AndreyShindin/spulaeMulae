import React from "react";
import profile from'./Profile.module.css';

function Profile(){
    return(
        <main className={profile.main}>
        <img className={profile.image} src='https://c.wallhere.com/photos/22/27/2560x1600_px_landscape_nature-1077192.jpg!d'></img>
        Main content
        <div className={profile.avatar}>
          av + desc
        </div>
        <div>
          my posts
        </div>
        <div>
          new post
        </div>
        <div className={profile.post}>
          <div className={profile.item}>
            post 1
          </div>
          <div className={profile.item}>
            post 2
          </div>
        </div>
       </main>
    )
}

export default Profile