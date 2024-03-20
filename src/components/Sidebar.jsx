function Sidebar() {
  return (
    <div class="box has-background-white">
      <aside class="menu">
        <p class="menu-label has-text-grey-dark">Marques</p>
        <label class="checkbox">
          <input type="checkbox" /> Nike
        </label>
        <label class="checkbox">
          <input type="checkbox" /> Adidas
        </label>
        <label class="checkbox">
          <input type="checkbox" /> Vans
        </label>
        <label class="checkbox">
          <input type="checkbox" /> Yeezy
        </label>
        <label class="checkbox">
          <input type="checkbox" /> Converse
        </label>
        <p class="menu-label has-text-grey-dark">Administration</p>
        <ul class="menu-list">
          <li>
            <a class="menu-label has-text-grey-dark">Team Settings</a>
          </li>
          <li>
            <a class="is-active">Manage Your Team</a>
            <ul>
              <li>
                <a class="has-text-grey-dark">Members</a>
              </li>
              <li>
                <a class="has-text-grey-dark">Plugins</a>
              </li>
              <li>
                <a class="has-text-grey-dark">Add a member</a>
              </li>
            </ul>
          </li>
          <li>
            <a class="has-text-grey-dark">Invitations</a>
          </li>
          <li>
            <a class="has-text-grey-dark">Cloud Storage Environment Settings</a>
          </li>
          <li>
            <a class="has-text-grey-dark">Authentication</a>
          </li>
        </ul>
        <p class="menu-label has-text-grey-dark">Transactions</p>
        <ul class="menu-list">
          <li>
            <a class="has-text-grey-dark">Payments</a>
          </li>
          <li>
            <a class="has-text-grey-dark">Transfers</a>
          </li>
          <li>
            <a class="has-text-grey-dark">Balance</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
