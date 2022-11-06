class MyHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(31, 31, 31)">
            <div class="container">
                <a class="navbar-brand" href="#">SMOLIN NIKITA</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav mr-auto mb-3 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Обо мне</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Резюме</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Портфолио</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Услуги
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Логотип</a></li>
                        <li><a class="dropdown-item" href="#">Айдентика</a></li>
                        <li><a class="dropdown-item" href="#">Сайт</a></li>
                        <li><a class="dropdown-item" href="#">Приложение</a></li>
                      </ul>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Контакты</a>
                      </li>
                    </li>
                  </ul>
                </div>
              </div>
        </nav>
      </header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <footer id="footer">
        <div class="container">
            <nav class="nav nav-pills flex-column flex-sm-row">
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Обо мне</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Резюме</a>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Услуги
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Логотип</a></li>
                      <li><a class="dropdown-item" href="#">Айдентика</a></li>
                      <li><a class="dropdown-item" href="#">Сайт</a></li>
                      <li><a class="dropdown-item" href="#">Приложение</a></li>
                    </ul>
                  </li>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Портфолио</a>
                <a class="flex-sm-fill text-sm-center nav-link" href="#">Контакты</a>
              </nav>
        </div>
        <div class="container"><h3>NIKITA SMOLIN ©2022</h3></div>
        <!-- <h3>NIKITA SMOLIN ©2022</h3> -->
    </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)