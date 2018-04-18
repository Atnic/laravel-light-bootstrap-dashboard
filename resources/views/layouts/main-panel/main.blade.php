<div class="main-panel">
  <nav class="navbar navbar-expand-lg " color-on-scroll="500">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">@yield('content-title', 'Title')</a>
        <button href="" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar burger-lines"></span>
          <span class="navbar-toggler-bar burger-lines"></span>
          <span class="navbar-toggler-bar burger-lines"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a href="#" class="nav-link" data-toggle="dropdown">
                <i class="nc-icon nc-palette"></i>
                <span class="d-lg-none">Dashboard</span>
            </a>
          </li>
          <li class="dropdown nav-item">
            <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
              <i class="nc-icon nc-planet"></i>
              <span class="notification">5</span>
              <span class="d-lg-none">Notification</span>
            </a>
            <ul class="dropdown-menu">
              <a class="dropdown-item" href="#">Notification 1</a>
              <a class="dropdown-item" href="#">Notification 2</a>
              <a class="dropdown-item" href="#">Notification 3</a>
              <a class="dropdown-item" href="#">Notification 4</a>
              <a class="dropdown-item" href="#">Another notification</a>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nc-icon nc-zoom-split"></i>
              <span class="d-lg-block">&nbsp;Search</span>
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          @if (auth()->check())
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="no-icon">Account</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span class="no-icon">Dropdown</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something</a>
              <a class="dropdown-item" href="#">Something else here</a>
              <div class="divider"></div>
              <a class="dropdown-item" href="#">Separated link</a>
            </div>
          </li>
          <li class="nav-item">
              <form id="logout-form" action="{{ url('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
              </form>
              <a class="nav-link" href="#" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                <span>Logout</span>
              </a>
          </li>
          @elseif(!isset($exception))
          <li class="nav-item">
            <a class="nav-link" href="{{ route('login') }}">
              <span>Login</span>
            </a>
          </li>
          @endif
        </ul>
      </div>
    </div>
  </nav>

  <div class="content">

    @yield('content')

  </div>

  @include('light-bootstrap-dashboard::layouts.main-panel.footer.main')
</div>
