<?php 
$meta_title = 'Jessica Townsend - Web Developer';
$meta_desc  = 'I am a professional web developer with experience working with a team and communicating with clients to meet project objectives.';
include('assets/includes/header.php'); ?>

<section id="home" class="landing mountains-section">
  <div class="grid-container">
    <div class="grid-x grid-padding-y align-bottom">
      <div class="cell large-12">
        <h1>hello there</h1>
        <p>My name is Jessica Townsend. I develop custom web experiences.</p>
        <a href="#about"><?php include('assets/svg/arrow-down.svg'); ?></a>
      </div>
    </div>
  </div>
  <div class="mountains-container">
    <div class="background">
      <?php include('assets/svg/background2.svg'); ?>
    </div>
    <div class="midground">
      <?php include('assets/svg/midground2.svg'); ?>
    </div>
    <div class="foreground">
      <?php include('assets/svg/foreground2.svg'); ?>
    </div>
  </div>
</section>
<section id="about" class="about">
  <div class="grid-container">
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="scroll-animation slide cell large-5 medium-6">
        <div class="fill-container">
          <img src="/assets/img/portrait.jpg" alt="profile image of Jessica">
        </div>
      </div>
      <div class="cell large-6 medium-8">
        <h2>this is me</h2>
        <p>I am a professional web developer with experience communicating directly with clients and working in a team to meet project objectives. I graduated from Purdue University in May 2021 with a B.S. in Web Programming & Design and a B.S. in Virtual Product Integration.</p>
  
        <p>I live in West Lafayette, Indiana with my two dogs. In my free time I enjoy traveling, hiking, and playing video games. I hope to move to the Pacific Northwest to be closer to the national parks there.</p>
        <div class="button-container">
          <a href="/assets/pdf/jessica-townsend-resume.pdf" target="_blank" class="button">view my resume</a>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="projects" class="projects">
  <div class="content-section">
    <div class="grid-container">
      <div class="content-grid grid-x align-center">
        <div class="cell large-8 medium-8">
          <h2>explore my work</h2>
          <p>Here are a few of my favorite projects, developed while working at <a href="https://sfp.net">SFP</a>. If you have any questions or want to know more, email me at <a href="mailto:jessicaat123@gmail.com">jessicaat123@gmail.com</a>.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="project-section">
    <div class="grid-container">
      <div class="grid-x grid-margin-x grid-margin-y align-center">
        <div class="scroll-animation stagger cell large-6 medium-8">
          <div class="text-container">
            <h3>teays river brewing</h3>
            <p>This site was developed for a restaurant and brewery in Lafayette, Indiana, utilizing the Untappd API and Vue to display their current beer selections.</p>
            <div class="flag-container">
              <span>vue</span>
              <span>untappd api</span>
              <span>wordpress</span>
            </div>
            <div class="button-container">
              <a href="https://teaysriverbrewing.com/" target="_blank" class="button">visit site <?php include('assets/svg/arrow-right.svg'); ?></a>
            </div>
          </div>
          <div class="fill-container">
            <img src="/assets/img/teays-river-brewing.jpg" alt="">
          </div>
        </div>
        <div class="scroll-animation stagger cell large-6 medium-8">
          <div class="text-container">
            <h3>ag alumni seed</h3>
            <p>The client for this project was a popcorn hybrid supplier in Romney, Indiana and needed a site to organize their popcorn varieties.</p>
            <div class="flag-container">
              <span>laravel</span>
              <span>custom cms</span>
            </div>
            <div class="button-container">
              <a href="https://www.agalumniseed.com/" target="_blank" class="button">visit site <?php include('assets/svg/arrow-right.svg'); ?></a>
            </div>
          </div>
          <div class="fill-container">
            <img src="/assets/img/ag-alumni-seed.jpg" alt="">
          </div>
        </div>
        <div class="scroll-animation stagger cell large-6 medium-8">
          <div class="text-container">
            <h3>hearts arrow events</h3>
            <p>One of the goals for this project was for users to add products to a wishlist, which was acieved with a custom WordPress theme and the Goodshuffle Pro plugin.</p>
            <div class="flag-container">
              <span>wordpress</span>
              <span>goodshuffle pro</span>
            </div>
            <div class="button-container">
              <a href="https://heartsarrowevents.com/" target="_blank" class="button">visit site <?php include('assets/svg/arrow-right.svg'); ?></a>
            </div>
          </div>
          <div class="fill-container">
            <img src="/assets/img/hearts-arrow-events.jpg" alt="">
          </div>
        </div>
        <div class="scroll-animation stagger cell large-6 medium-8">
          <div class="text-container">
            <h3>rossville quilts</h3>
            <p>I worked on the front-end piece for this ecommerce project, which used <a href="https://sfp.net">SFP's</a> in-house Laravel-based CMS. The client was a quilting supply company based in Rossville, Indiana.</p>
            <div class="flag-container">
              <span>ecommerce</span>
              <span>laravel</span>
              <span>vue</span>
              <span>custom cms</span>
            </div>
            <div class="button-container">
              <a href="https://teaysriverbrewing.com" target="_blank" class="button">visit site <?php include('assets/svg/arrow-right.svg'); ?></a>
            </div>
          </div>
          <div class="fill-container">
            <img src="/assets/img/rossville-quilts.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include('assets/includes/footer.php'); ?>