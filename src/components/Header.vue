<template>
   <header id="header">
      <nav class="navbar">
         <!-- Logo -->
         <div class="logo">
            <a href="/">
               <!-- Placeholder logo -->
               logo
               <!-- <img src="" alt=""> -->
            </a>
         </div>
         <!-- Nav links -->
         <div class="nav-list">
            <ol>
               <li><a href="/">{{ $t('nav.home') }}</a></li>
               <li><a href="/#about">{{ $t('nav.about') }}</a></li>
               <li><a href="/#experience">{{ $t('nav.experience') }}</a></li>
               <li><a href="/#projects">{{ $t('nav.projects') }}</a></li>
               <li><a href="/#contact">{{ $t('nav.contact') }}</a></li>
            </ol>
         </div>
         <!-- Dropdown -->
         <div class="dropdown">
            <button class="ham-btn" @click="toggleDropdown()">
               
            </button>
            <aside :class="[dropdownIsActive ? 'active' : '','sidebar']">
               <ol>
                  <li><a href="/">{{ $t('nav.home') }}</a></li>
                  <li><a href="/#about">{{ $t('nav.about') }}</a></li>
                  <li><a href="/#experience">{{ $t('nav.experience') }}</a></li>
                  <li><a href="/#projects">{{ $t('nav.projects') }}</a></li>
                  <li><a href="/#contact">{{ $t('nav.contact') }}</a></li>
               </ol>
            </aside>
         </div>
      </nav>
   </header>
</template>

<script>
export default {
   name: 'MainHeader',
   data() {
      return {
         dropdownIsActive: false
      }
   },
   methods: {
      toggleDropdown: function() {
         this.dropdownIsActive = !this.dropdownIsActive;
      }
   }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/_variables.scss';
@import '../assets/scss/style.scss';

#header {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   padding: 0px 50px;
   height: 100px;
   background-color: $primary-bg;
   display: flex;
   align-items: center;

   .navbar {
      // position: relative;
      width: 100%;
      color: $lightest-slate;
      font-family: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .logo {
         display: flex;
         align-items: center;
         justify-content: center;
         width: 50px;
         aspect-ratio: 1;
         border: 1px solid yellow;
      }

      .nav-list {
         display: flex;

         ol {
            display: contents;

            li {
               margin: 0 5px;
               font-size: 15px;

               a {
                  padding: 10px;

                  &::before {
                     content: "0" counter(list-item) ".";
                     margin-right: 5px;
                     color: $highlight;
                  }

                  &:hover {
                     color: $highlight;
                  }
               }
            }
         }
      }

      .dropdown {
         display: none;

         .ham-btn {
            display: inline-block;
            width: 30px;
            aspect-ratio: 1;
         }

         .sidebar {
            display: none;
            position: absolute;
            top: 0;
            right: 0;
            width: min(75vw, 400px);
            min-height: 100vh;
            background-color: $secundary-bg;
            z-index: -1;
            align-items: center;

            &.active {
               display: flex;
            }

            ol {
               width: 100%;
               display: flex;
               flex-direction: column;
               align-items: center;
               gap: 20px;

               li {
                  font-size: 18px;
                  display: list-item;
                  counter-increment: item;

                  &::before {
                     font-size: 16px;
                     content: "0" counter(item) ".";
                     margin-right: 5px;
                     color: $highlight;
                  }

                  a {
                     display: inline-block;
                     width: 100%;
                     padding: 3px 20px 20px;

                     &:hover {
                        color: $highlight;
                     }
                  }
               }
            }
         }
      }
   }
}

@media screen and (max-width: 768px) {

   #header {

      .navbar {

         .nav-list {
            display: none;
         }

         .dropdown {
            display: block;
         }
      }
   }
}

</style>