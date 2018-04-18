<footer class="footer">
  <div class="container">
    <nav>
      @section('footer-menu')
      <ul class="footer-menu">
        <li>
          <a href="#">
            Home
          </a>
        </li>
        <li>
          <a href="#">
            Company
          </a>
        </li>
        <li>
          <a href="#">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            Blog
          </a>
        </li>
      </ul>
      @show
      <p class="copyright text-center">
        &copy; {{ date('Y') }}
      </p>
    </nav>
  </div>
</footer>
