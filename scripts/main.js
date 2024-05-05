NAVBAR = `
<!-- <header>
<a href="index.html" class="header-title">DMA-NEVES</a>
</header> -->

<nav>
    <a href="index.html">DMA</a>
    <a href="https://www.github.com/dma-neves">Github</a>
    <a href="publications.html">Publications</a>
    <a href="projects.html">Projects</a>
    <a href="posts.html">Blog</a>
    <!--<a href="content.html">Content</a>-->
    <!--<a href="lists.html">Lists</a>-->
    <a href="contacts.html">Contacts</a>
</nav>
`;

window.addEventListener('DOMContentLoaded', (event) => {

    addNavbar();
    numberTables();
});

function numberTables() {

    const tables = document.querySelectorAll('table.numbered_table');

    tables.forEach(table => {
        const tbody = table.querySelector('tbody');

        const rows = tbody.querySelectorAll('tr');
        rows.forEach((row, index) => {

            const numberCell = document.createElement('td');
            numberCell.textContent = (index + 1).toString();
            row.appendChild(numberCell);
        });
    });
}

function addNavbar() {

    const navElement = document.createElement('span');
    navElement.innerHTML = NAVBAR;

    const bodyElement = document.body;
    bodyElement.insertBefore(navElement, bodyElement.firstChild);
}