<?php 
$meta_title = 'Jessica Townsed | Web Developer';
$meta_desc  = 'I am a professional web developer with experience working with a team and communicating with clients to meet project objectives.';
include('assets/includes/header.php'); ?>

<section id="home" class="landing">
  <div class="grid-container">
    <div class="grid-x grid-padding-y">
      <div class="cell large-12">
        <h1>hello there</h1>
        <p>My name is Jessica Townsend. I develop custom web experiences.</p>
        <a href="#about"><?php include('assets/svg/arrow-down.svg'); ?></a>
      </div>
    </div>
  </div>
</section>
<section id="about" class="about">
  <div class="grid-container">
    <div class="grid-x grid-margin-x grid-margin-y">
      <div class="cell large-5">
        <div class="fill-container">
          <img src="/assets/img/profile.jpg" alt="profile image of Jessica">
        </div>
      </div>
      <div class="cell large-7">
        <h2>this is me</h2>
        <p>I am a professional web developer with experience working with a team and communicating with clients to meet project objectives. I graduated from Purdue University in May 2021 with a B.S. in Web Programming & Design and a B.S. in Virtual Product Integration.</p>
        <p>I live in West Lafayette, Indiana with my two dogs. In my free time I enjoy traveling, hiking, and playing video games. I hope to move to the Pacific Northwest to be closer to the national parks there.</p>
        <div class="button-container">
          <a href="/assets/pdf/jessica-townsend-resume.pdf" class="button">view my resume</a>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include('assets/includes/footer.php'); ?>