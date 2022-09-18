<template>
    <header>
        <nav>
            <div class="general-links-container">
            <ul>
                <li><router-link to="/">HOME</router-link></li>
                <li><router-link to="/about">ABOUT</router-link></li>
                <li><router-link to="/boats">BOATS</router-link></li>
            </ul>
            </div>
            <div class="account-links-container">
                <ul>
                    <li>My Profile</li>
                    <li>Sign-in</li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        width: 100%;
        border-bottom: 3px solid rgb(199, 199, 199);
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color: white;
        font-size: 1.8rem;
        font-weight: bold;
    }

    nav .general-links-container {
        margin-left: 20px;

    }

    nav .account-links-container {
        margin-right: 20px;
    }

    nav .general-links-container ul,
    nav .account-links-container ul {
        display: flex;
        gap: 20px;
        list-style-type: none;
        
        padding: 0;
    }

    nav .general-links-container ul li,
    nav .account-links-container ul li {
        display: inline;
    }

    nav .general-links-container ul li a,
    nav .general-links-container ul li a:visited,
    nav .account-links-container ul li a,
    nav .account-links-container ul li a:visited {
        text-decoration: none;
        color: rgb(71, 71, 71);
    }

    nav .general-links-container ul li a:hover,
    nav .general-links-container ul li a:active,
    nav .general-links-container ul li a.router-link-active,
    nav .account-links-container ul li a:hover,
    nav .account-links-container ul li a:active,
    nav .account-links-container ul li a.router-link-active
     {
        color: rgb(255, 173, 251);
        font-weight: bolder;
        
    }

    .header-banner {
        display: flex;
        justify-content: center;
        align-content: center;

    }



</style>

