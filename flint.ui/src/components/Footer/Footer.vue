<template>
  <!-- Footer -->
  <mdb-footer color="stylish-color-dark" class="font-small pt-4 mt-4">
    <mdb-container class="text-center text-md-left">
      <mdb-row class="text-center text-md-left mt-3 pb-3">
        <mdb-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.</p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p><a href="#!">MDBootstrap</a></p>
          <p><a href="#!">MDWordPress</a></p>
          <p><a href="#!">BrandFlow</a></p>
          <p><a href="#!">Bootstrap Angular</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="3" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p><a href="#!">Hello</a></p>
          <p><a href="#!">Become an Contributor</a></p>
          <p><a href="#!">Support</a></p>
          <p><a href="#!">Help</a></p>
        </mdb-col>
        <hr class="w-100 clearfix d-md-none" />
        <mdb-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i class="fas fa-home mr-3"></i>Moja Global</p>
          <p><i class="fas fa-envelope mr-3"></i> moja@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 01 888 888 88</p>
          <p><i class="fas fa-print mr-3"></i> + 01 345 678 89</p>
        </mdb-col>
      </mdb-row>
      <hr />
      <mdb-row class="d-flex align-items-center">
        <mdb-col md="8" lg="8">
          <p class="text-center text-md-left grey-text">&copy; 2020 Copyright: <a href="https://www.MDBootstrap.com">
              MDBootstrap.com </a></p>
        </mdb-col>
        <mdb-col md="4" lg="4" class="ml-lg-0">
          <div class="text-center text-md-right">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-facebook"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-google-plus"></i></a></li>
              <li class="list-inline-item"><a class="btn-floating btn-sm rgba-white-slight mx-1"><i class="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbIcon
    }
  }
</script>