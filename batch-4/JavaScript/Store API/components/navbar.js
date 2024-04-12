export function CustomNav() {
  const navbar = document.createElement("nav");
  navbar.innerHTML = `<div id='navbar'>
      <div class="title">
        <h2>.Fake Store API</h2>
        </div>
        <div class="menu">
            <ul>
                <a href="../home/index.html">
                <li>Products</li> 
                </a>
                <a href="../cart/cart.html">
                <li>Cart</li>
                </a>
                <li class="ac">Create a accout</li>
            </ul>
            </div>
</div>`;
  return navbar;
}
