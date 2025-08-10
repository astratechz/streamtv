Skip to content
Navigation Menu
astratechz

Code
Issues
Pull requests
legacytv
/script.js
 
416 lines (399 loc) · 15.3 KB

Code

Blame
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}
  
const correctPassword = "test";

function checkPassword() {
    const inputPassword = document.getElementById("passwordInput").value;
    if (inputPassword === correctPassword) {
        document.getElementById("login-screen").style.display = "none";
    } else {
        alert("Incorrect password, try again.");
    }
}

function togglePassword() {
    const passwordField = document.getElementById("passwordInput");
    const toggleButton = document.getElementById("togglePassword");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleButton.textContent = "Show";
    }
}

const channels = [
    {
        name: "AZAM SPORTS 1",
        src: "https://1375207669.rsc.cdn77.org/1375207669/index.mpd",
        key: "675c9741780f4b75b74d4bf08536084b:5bec79012cd8e84f3cfe6bee4992b4b7",
        drm: "clearkey"
    },
    {
        name: "AZAM SPORTS 2",
        src: "https://1921800925.rsc.cdn77.org/1921800925/index.mpd",
        key: "5316e9bf6cce4ea4942a676eee52d8ce:ccc4258e5c7b485a2b148f37cbdfdc6a",
        drm: "clearkey" 
    },
    {
        name: "AZAM SPORTS 3",
        src: "https://1272419850.rsc.cdn77.org/1272419850/index.mpd",
        key: "c764c3a21d054b3086a09698bb1aacbd:3444a68d6f5568cfbd42b33fec54aecf",
        drm: "clearkey"
    },
    {
        name: "AZAM SPORTS 4",
        src: "https://1449337437.rsc.cdn77.org/1449337437/index.mpd",
        key: "d33d758208f84c10af75d39e3c3adf6a:2145d798aed80ad44d0ad198f38d0f9b",
        drm: "clearkey"
    },
    {
        name: "AZAM ONE",
        src: "https://1647151410.rsc.cdn77.org/1647151410/index.mpd",
        key: "24bbf3ac7ba440948990e3b193b4eb98:b39279dfc0eaaef53570f9a6839a19c6",
        drm: "clearkey"
    },
    {
        name: "AZAM TWO",
        src: "https://1030517708.rsc.cdn77.org/1030517708/index.mpd",
        key: "ee8085ef939b4434aa6c5f0d7e7b8863:c48a7a886dfdcbbc7d9bf71d13bb976e",
        drm: "clearkey"
    },
    {
        name: "SINEMA ZETU",
        src: "https://1385876236.rsc.cdn77.org/1385876236/index.mpd",
        key: "fb284327047940c3ae17b263dc197488:c753256045313f48b652d3dbb920cd4f",
        drm: "clearkey"
    },
    {
        name: "ZAMARADI TV",
        src: "https://1492963165.rsc.cdn77.org/1492963165/index.mpd",
        key: "cb25785c18c54d649be2dae85ff03194:eb73acdad92ca409ba7ae364788ef16e",
        drm: "clearkey"
    },
    {
        name: "UTV",
        src: "https://1730904702.rsc.cdn77.org/1730904702/index.mpd"",
        key: "1caf60bdaa7e4c90908f0cd72b309fae:4bc9e94d6b3df69d995d9e9e5be86bdc",
        drm: "clearkey"
    },
    {
        name: "CROWN TV",
        src: "https://1980121900.rsc.cdn77.org/1980121900/index.mpd",
        key: "d861e2b92c744fbba861fb8b1906cf74:977897864cf6d102c85816edb8e403a8",
        drm: "clearkey" 
    },
    {
        name: "DAZN RISE",
        src: "https://ac-003.live.p7s1video.net/4a37da02/t_003/dazn-rise-hd/cenc-default.mpd",
        key: "75508caa27239cd34ca45ee862f1bbf2:d38f9f2b690bad3fcc838013242cc5e4",
        drm: "clearkey"              
    },
    {
        name: "TNT SPORTS 1",
        src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/wf8usag51e/out/v1/bd3b0c314fff4bb1ab4693358f3cd2d3/cenc.mpd",
        key: "ae26845bd33038a9c0774a0981007294:63ac662dde310cfb4cc6f9b43b34196d",
        drm: "clearkey"
    },
    {
        name: "TNT SPORTS 2",
        src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/f0qvkrra8j/out/v1/f8fa17f087564f51aa4d5c700be43ec4/cenc.mpd",
        key: "6d1708b185c6c4d7b37600520c7cc93c:1aace05f58d8edef9697fd52cb09f441",
        drm: "clearkey"
    },
    {
        name: "TNT SPORTS 3",
        src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/lsdasbvglv/out/v1/bb548a3626cd4708afbb94a58d71dce9/cenc.mpd",
        key: "4e993aa8c1f295f8b94e8e9e6f6d0bfe:86a1ed6e96caab8eb1009fe530d2cf4f",
        drm: "clearkey"
    },
    {
        name: "TNT SPORTS 4",
        src: "https://a129aivottlinear-a.akamaihd.net/OTTB/lhr-nitro/live/clients/dash/enc/i2pcjr4pe5/out/v1/912e9db56d75403b8a9ac0a719110f36/cenc.mpd",
        key: "e31a5a81caff5d07ea2411a571fc2e59:96c5ef69479732ae734f962748c19729",
        drm: "clearkey"
    },
    {
        name: "TNT SPORTS 5",
        src: "https://otte.live.fly.ww.aiv-cdn.net/SIN/live/dash/enc/gesdwrdncn/out/v1/79e752f1eccd4e18b6a8904a0bc01f2d/cenc.mpd",
        key: "60c0d9b41475e01db4ffb91ed557fbcc:36ee40e58948ca15e3caba8d47b8f34b",
        drm: "clearkey"
    },
    {
        name: "NFL Channel",
        src: "https://fsly.stream.peacocktv.com/Content/CMAF_CTR-4s-v2/Live/channel(lc107a1ddy)/master.mpd",
        key: "002007110c69a23803173b50eab05f23:590d6e8f4ca81319f9bb29104f571990",
        drm: "clearkey"
    },
    {
        name: "LALIGA TV",
        src: "https://abclxdjaaaaaaaamkqb6y4p6ie2zk.ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/k0duzgfejg/out/v1/70a50b1bda944628b8e7e66ab4069419/cenc.mpd",
        key: "620e51b82596475517a27aa425c52280:2b9ba811e9c5aeafc8ae1b71cdca4d6a",
        drm: "clearkey" 
    },
    {
        name: "KIX",
        src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd",
        key: "a8d5712967cd495ca80fdc425bc61d6b:f248c29525ed4c40cc39baeee9634735",
        drm: "clearkey"
    },
    {
        name: "SPOTV",
        src: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd",
        key: "ec7ee27d83764e4b845c48cca31c8eef:9c0e4191203fccb0fde34ee29999129e",
        drm: "clearkey"
    },
    {
        name: "SPOTV 2",
        src: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd",
        key: "7eea72d6075245a99ee3255603d58853:6848ef60575579bf4d415db1032153ed",
        drm: "clearkey"
    },
    {
        name: "Al-Jazeera",
        src: "https://viamotionhsi.netplus.ch/live/eds/aljazeera/browser-dash/aljazeera.mpd",
        key: "",
        drm: "clearkey"
    },
    {
        name: "BBC TWO",
        src: "https://viamotionhsi.netplus.ch/live/eds/bbc2/browser-dash/bbc2.mpd",
        key: "",
        drm: "clearkey"
    },
    {
       name: "BBC THREE",
        src: "https://nlziet-live.akamaized.net/L12/4891aa65/2c23ee3a.isml/.mpd",
        key: "6ba7bf50494381beca9e2f7e3be96f:c0a14394f5518ec810656323d3fe9903",
        drm: "clearkey"
    },
    {
        name: "BBC FOUR",
        src: "https://nlziet-live.akamaized.net/L24/b7d8aaf5/cfe54783.isml/.mpd",
        key: "0000000000000000000000000063340a:5ce85f1aa5771900b952f0ba58857d7a",
        drm: "clearkey"  
    },
    {
        name: "CNN",
        src: "https://viamotionhsi.netplus.ch/live/eds/cnn/browser-dash/cnn.mpd",
        key: "",
        drm: "clearkey"
    },
    {
        name: "SKY NEWS",
        src: "https://viamotionhsi.netplus.ch/live/eds/skynews/browser-dash/skynews.mpd",
        key: "",
        drm: "clearkey"
    },
    {
        name: "ANIMAL PLANET",
        src: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd",
        key: "436b69f987924fcbbc06d40a69c2799a:c63d5b0d7e52335b61aeba4f6537d54d",
        drm: "clearkey"
        
     },
     {
        name: "HISTORY",
        src: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd",
        key: "a7724b7ca2604c33bb2e963a0319968a:6f97e3e2eb2bade626e0281ec01d3675",
        drm: "clearkey"
    },
    {
        name: "HGTV",
        src: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd",
        key: "f0e3ab943318471abc8b47027f384f5a:13802a79b19cc3485d2257165a7ef62a",
        drm: "clearkey"
    },
    {
        name: "VIVA CINEMA",
        src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd",
        key: "07aa813bf2c147748046edd930f7736e:3bd6688b8b44e96201e753224adfc8fb",
        drm: "clearkey"    
    },  
    {
       name: "ANIMAX",
        src: "https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd",
        key: "edf1a715de9748638dd2fad75a419af2:2f5a3199b26e9b693ae881af7ff864cf",
        drm: "clearkey" 
    },
    {
        name: "CARTOON NETWORK",
        src: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd",
        key: "a2d1f552ff9541558b3296b5a932136b:cdd48fa884dc0c3a3f85aeebca13d444",
        drm: "clearkey" 
    },
    {
        name: "CARTOONITO",
        src: "https://atemecdnbalancer-voe.sysln.id/live/eds/CartoonitoHD/mpd/CartoonitoHD.mpd",
        key: "955574ee2b674f0fbbad818fb384c233:51d2893619bdd062fb4c0cdaafefbf27",
        drm: "clearkey"      
    },
    {
        name: "PARAMOUNT",
        src: "https://viamotionhsi.netplus.ch/live/eds/paramount/browser-dash/paramount.mpd",
        key: "",
        drm: "clearkey"
    },
    {
        name: "FOOD NETWORK",
        src: "https://viamotionhsi.netplus.ch/live/eds/foodnetwork/browser-dash/foodnetwork.mpd",
        key: "",
        drm: "clearkey"
    },
    {
        name: "BLOOMBERG",
        src: "https://viamotionhsi.netplus.ch/live/eds/bloomberg/browser-dash/bloomberg.mpd",
        key: "",
        drm: "clearkey"
    },
    {
        name: "CRIME INVESTIGATION",
        src: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd",
        key: "21e2843b561c4248b8ea487986a16d33:db6bb638ccdfc1ad1a3e98d728486801",
        drm: "clearkey"
    },
    {
        name: "FASHION TV",
        src: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd",
        key: "971ebbe2d887476398e97c37e0c5c591:472aa631b1e671070a4bf198f43da0c7",
        drm: "clearkey"
    },
    {
        name: "KBS WORLD",
        src: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd",
        key: "22ff2347107e4871aa423bea9c2bd363:c6e7ba2f48b3a3b8269e8bc360e60404",
        drm: "clearkey"
    },
    {
        name: "DISCOVERY CHANNEL",
        src: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd",
        key: "d9ac48f5131641a789328257e778ad3a:b6e67c37239901980c6e37e0607ceee6",
        drm: "clearkey"
    },
    {
        name: "BBC EARTH",
        src: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd",
        key: "34ce95b60c424e169619816c5181aded:0e2a2117d705613542618f58bf26fc8e",
        drm: "clearkey"
    },
    {
        name: "NICKELODEON",
        src: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd",
        key: "9ce58f37576b416381b6514a809bfd8b:f0fbb758cdeeaddfa3eae538856b4d72",
        drm: "clearkey"
    },
    {
        name: "NICK JR",
        src: "https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd",
        key: "bab5c11178b646749fbae87962bf5113:0ac679aad3b9d619ac39ad634ec76bc8",
        drm: "clearkey"
    },
    {
        name: "STARZ PLAY ARABIA",
        src: "https://sps1.starzplayarabia.com/out/v1/41ff8fde1cd84ed5b30ab8198755356b/index.mpd",
        key: "b253c726c24c7c94a3ddf9b1907e2c76:097963d6ad73c3d712a104981de0ed42",
        drm: "clearkey"  
    },
    {
        name: "WASAFI TV",
        src: "https://1748194871.rsc.cdn77.org/1748194871/index.mpd",
        key: "d4f20ed444c8489396111f42b4e75c76:580c4cac54b256cefe8af5f55b93d0ec",
        drm: "clearkey" 
    },
    {
        name: "CRAVE 1",
        src: "https://live-crave.video.9c9media.com/137c6e2e72e1bf67b82614c7c9b216d6f3a8c8281748505659713/fe/f/crave/crave1/manifest.mpd",
        key: "4a107945066f45a9af2c32ea88be60f4:df97e849d68479ec16e395feda7627d0",
        drm: "clearkey"
    },
    {
        name: "CRAVE 3",
        src: "https://live-crave.video.9c9media.com/58def7d65f59ffaf995238981dd0e276d5a8fe8d1748593014588/fe/f/crave/crave3/manifest.mpd",
        key: "eac7cd7979f04288bc335fc1d88fa344:0fca71cf91b3c4931ad3cf66c631c24c",
        drm: "clearkey"   
    },
    {
        name: "CRAVE 4",
        src: "https://live-crave.video.9c9media.com/c5875a31f178e038f7cc572b1aa0defb996ce7171748593186018/fe/f/crave/crave4/manifest.mpd",
        key: "a7242a7026ff45609114ee1f3beb34dc:65c32ada65548203a3683d5d37dd3a06",
        drm: "clearkey"
    },
    {
        name: "HBO BOXING",
        src: "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/cmtyd9kpfe/out/v1/813bba04214e4f4dab57f0129365635a/cenc.mpd",
        key: "a4b2fe10c9d62d32220e8ea2dceda6f9:e6e1173c892f7fbd60a37a76a78935cb",
        drm: "clearkey"
    },
    {
        name: "NBA TV",
        src: "https://ottb.live.cf.ww.aiv-cdn.net/dub-nitro/live/clients/dash/enc/2jbycgm3g3/out/v1/066dd9325648468c9ecdc8b272370931/cenc.mpd",
        key: "84077d18bcf234a42de3745be106a87f:aee3069c062ec8ee6bfdd32985f287ef",
        drm: "clearkey"
    },       
];

document.addEventListener('DOMContentLoaded', async () => {
    const videoElement = document.getElementById('video');
    const pipButton = document.getElementById('pipButton');
    const channelListElement = document.getElementById('channelList');
    const videoContainer = document.getElementById('videoContainer');

    if (!document.pictureInPictureEnabled) {
        pipButton.style.display = 'none';
    }

    pipButton.addEventListener('click', () => {
        if (document.pictureInPictureElement) {
            document.exitPictureInPicture();
        } else {
            videoElement.requestPictureInPicture().catch(error => {
                console.error('Error entering PiP mode: ', error);
            });
        }
    });

    const player = new shaka.Player(videoElement);
    const ui = new shaka.ui.Overlay(player, videoContainer, videoElement);

    ui.configure({
        'overflowMenuButtons': ['quality', 'language', 'captions', 'playback_rate', 'cast']
    });

    async function loadChannel(channel) {
        videoElement.style.display = "block";
        videoContainer.classList.add("active");

        if (!shaka.Player.isBrowserSupported()) {
            alert("Your browser does not support Shaka Player.");
            return;
        }

        try {
            await player.attach(videoElement);
            player.configure({
                drm: {
                    clearKeys: {
                        [channel.key.split(":")[0]]: channel.key.split(":")[1]
                    }
                }
            });

            await player.load(channel.src);
            videoElement.play().catch(error => console.warn("Autoplay failed: User interaction needed", error));
        } catch (error) {
            console.error("Error loading video:", error);
            alert("Error loading channel: " + channel.name);
        }
    }

    function populateChannels() {
        channels.forEach((channel) => {
            const li = document.createElement('li');
            li.textContent = channel.name;
            li.onclick = () => {
                document.querySelectorAll('.channel-list li').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                loadChannel(channel);
            };
            channelListElement.appendChild(li);
        });
    }

    function searchChannels() {
        let input = document.getElementById('searchInput').value.toLowerCase();
        document.querySelectorAll('.channel-list li').forEach(channel => {
            channel.style.display = channel.textContent.toLowerCase().includes(input) ? "block" : "none";
        });
    }

    populateChannels();
    window.searchChannels = searchChannels;
});
Footer
© 2025 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
