

$('.addButton')
    .on('click', () => {
        let url = window.prompt('需要添加的网址')
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        console.log(url);
        const $siteList = $('.siteList')
        const $lastLi = $siteList.find('li.last')
        const $li = $(`<li>
              <a href="${url}">
                  <div class="card">
                      <div class="logo">${url[0]}</div>
                     <div class="site">${url}</div>
                 </div>
             </a>
          </li>`).insertBefore($lastLi)
    })