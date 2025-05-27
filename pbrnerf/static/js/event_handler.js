document.addEventListener('DOMContentLoaded', domReady);

        function domReady() {
            new Dics({
                container: document.querySelectorAll('.b-dics')[0],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[1],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[2],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[3],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[4],
                hideTexts: false,
                textPosition: "bottom"

            });
            new Dics({
                container: document.querySelectorAll('.b-dics')[5],
                hideTexts: false,
                textPosition: "bottom"

            });
        }

        function materialEstimationEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[0]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 4
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/neilf/city/pbrnerf_neilfpp_city_82';
                        break;
                    case 1:
                        image.src = 'assets/neilf/studio/pbrnerf_neilfpp_studio_62';
                        break;
                    case 2:
                        image.src = 'assets/neilf/castel/pbrnerf_neilfpp_castel_41';
                        break;
                    case 3:
                        image.src = 'assets/neilf/city_mix/pbrnerf_neilfpp_city_mix_30';
                        break;
                    case 4:
                        image.src = 'assets/neilf/studio_mix/pbrnerf_neilfpp_studio_mix_50';
                        break;
                    case 5:
                        image.src = 'assets/neilf/castel_mix/pbrnerf_neilfpp_castel_mix_73';
                        break;
                    case 6:
                        image.src = 'assets/dtu/DTU_scan37/pbrnerf_dtu_37_12';
                        break;
                    case 7:
                        image.src = 'assets/dtu/DTU_scan63/pbrnerf_dtu_63_17';
                        break;
                    case 8:
                        image.src = 'assets/dtu/DTU_scan105/pbrnerf_dtu_105_12';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_base.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_meta.jpg';
                        break;
                    case 2:
                        image.src = image.src + '_rgb.jpg';
                        break;
                    case 3:
                        image.src = image.src + '_roug.jpg';
                        break;

                }
            }

            let scene_list = document.getElementById("material-estimation").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function lightingEstimationEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[1]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/neilf/city/neilfpp_city_env';
                        break;
                    case 1:
                        image.src = 'assets/neilf/studio/neilfpp_studio_env';
                        break;
                    case 2:
                        image.src = 'assets/neilf/castel/neilfpp_castel_env';
                        break;
                    case 3:
                        image.src = 'assets/neilf/city_mix/neilfpp_city_mix_env';
                        break;
                    case 4:
                        image.src = 'assets/neilf/studio_mix/neilfpp_studio_mix_env';
                        break;
                    case 5:
                        image.src = 'assets/neilf/castel_mix/neilfpp_castel_mix_env';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_neilfpp.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_pbrnerf.jpg';
                        break;

                }
            }

            let scene_list = document.getElementById("lighting-estimation").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function geometryEstimationEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[2]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 2
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                switch (idx) {
                    case 0:
                        image.src = 'assets/dtu/DTU_scan37/dtu_37_12_normals';
                        break;
                    case 1:
                        image.src = 'assets/dtu/DTU_scan63/dtu_63_17_normals';
                        break;
                    case 2:
                        image.src = 'assets/dtu/DTU_scan105/dtu_105_12_normals';
                        break;
                }
                switch (i) {
                    case 0:
                        image.src = image.src + '_neilfpp.jpg';
                        break;
                    case 1:
                        image.src = image.src + '_pbrnerf.jpg';
                        break;

                }
            }

            let scene_list = document.getElementById("geometry-estimation").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function albedoEstimationEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[3]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                let method = 'pbrnerf'
                switch (i) {
                    case 0:
                        method = 'neilfpp';
                        break;
                    case 1:
                        method = 'pbrnerf';
                        break;
                    case 2:
                        method = 'gt';
                        break;
                }
                switch (idx) {
                    case 0:
                        image.src = 'assets/neilf/city/' + method + '_neilfpp_city_82_base.jpg';
                        break;
                    case 1:
                        image.src = 'assets/neilf/studio/' + method + '_neilfpp_studio_62_base.jpg';
                        break;
                    case 2:
                        image.src = 'assets/neilf/castel/' + method + '_neilfpp_castel_41_base.jpg';
                        break;
                    case 3:
                        image.src = 'assets/neilf/city_mix/' + method + '_neilfpp_city_mix_30_base.jpg';
                        break;
                    case 4:
                        image.src = 'assets/neilf/studio_mix/' + method + '_neilfpp_studio_mix_50_base.jpg';
                        break;
                    case 5:
                        image.src = 'assets/neilf/castel_mix/' + method + '_neilfpp_castel_mix_73_base.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("albedo-estimation").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function metallicnessEstimationEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[4]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                let method = 'pbrnerf'
                switch (i) {
                    case 0:
                        method = 'neilfpp';
                        break;
                    case 1:
                        method = 'pbrnerf';
                        break;
                    case 2:
                        method = 'gt';
                        break;
                }
                switch (idx) {
                    case 0:
                        image.src = 'assets/neilf/city/' + method + '_neilfpp_city_82_meta.jpg';
                        break;
                    case 1:
                        image.src = 'assets/neilf/studio/' + method + '_neilfpp_studio_62_meta.jpg';
                        break;
                    case 2:
                        image.src = 'assets/neilf/castel/' + method + '_neilfpp_castel_41_meta.jpg';
                        break;
                    case 3:
                        image.src = 'assets/neilf/city_mix/' + method + '_neilfpp_city_mix_30_meta.jpg';
                        break;
                    case 4:
                        image.src = 'assets/neilf/studio_mix/' + method + '_neilfpp_studio_mix_50_meta.jpg';
                        break;
                    case 5:
                        image.src = 'assets/neilf/castel_mix/' + method + '_neilfpp_castel_mix_73_meta.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("metallicness-estimation").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function roughnessEstimationEvent(idx) {
            let dics = document.querySelectorAll('.b-dics')[5]
            let sections = dics.getElementsByClassName('b-dics__section')
            let imagesLength = 3
            for (let i = 0; i < imagesLength; i++) {
                let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
                let method = 'pbrnerf'
                switch (i) {
                    case 0:
                        method = 'neilfpp';
                        break;
                    case 1:
                        method = 'pbrnerf';
                        break;
                    case 2:
                        method = 'gt';
                        break;
                }
                switch (idx) {
                    case 0:
                        image.src = 'assets/neilf/city/' + method + '_neilfpp_city_82_roug.jpg';
                        break;
                    case 1:
                        image.src = 'assets/neilf/studio/' + method + '_neilfpp_studio_62_roug.jpg';
                        break;
                    case 2:
                        image.src = 'assets/neilf/castel/' + method + '_neilfpp_castel_41_roug.jpg';
                        break;
                    case 3:
                        image.src = 'assets/neilf/city_mix/' + method + '_neilfpp_city_mix_30_roug.jpg';
                        break;
                    case 4:
                        image.src = 'assets/neilf/studio_mix/' + method + '_neilfpp_studio_mix_50_roug.jpg';
                        break;
                    case 5:
                        image.src = 'assets/neilf/castel_mix/' + method + '_neilfpp_castel_mix_73_roug.jpg';
                        break;
                }
            }

            let scene_list = document.getElementById("roughness-estimation").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

        function nvsEvent(idx) {
            const video = document.getElementById("dtu");

            switch (idx) {
              case 0:
                video.src = "assets/video/dtu_scene_37_rgb_comparison.mp4";
                break;
              case 1:
                video.src = "assets/video/dtu_scene_63_rgb_comparison.mp4";
                break;
              case 2:
                video.src = "assets/video/dtu_scene_105_rgb_comparison.mp4";
                break;
            }

            let scene_list = document.getElementById("nvs").children;
            for (let i = 0; i < scene_list.length; i++) {
                if (idx == i) {
                    scene_list[i].children[0].className = "nav-link active"
                }
                else {
                    scene_list[i].children[0].className = "nav-link"
                }
            }
        }

