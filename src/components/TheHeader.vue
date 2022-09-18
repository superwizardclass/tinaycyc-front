<template>
    <header>
        <nav>
            <div class="general-links-container">
            <ul>
                <li>HOME</li>
                <li>BOATS</li>
                <li>MEMBERS</li>
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
        color: rgb(71, 71, 71);
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

    .header-banner {
        display: flex;
        justify-content: center;
        align-content: center;

    }

    .header-banner h1 {
        
    }

</style>

