<template>
    <header>
        <nav>
            <div class="nav-links-container">
            <ul>
                <li>Home</li>
                <li>Boats</li>
                <li>Members</li>
            </ul>
            </div>
            <div class="account-links-container">
                <ul>
                    <li>My Profile</li>
                    <li>Sign-in</li>
                </ul>
            </div>
        </nav>
        <h1>This is not a yacht club Yacht Club</h1>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        width: 100%;
    }

    nav {
        display: flex;
        width: 100%;
        background-color: black;
        color: white;
    }

    nav ul {
        list-style-type: none;
    }

    nav ul li {
        display: inline;
    }

</style>

