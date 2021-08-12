/*
 * Toggle the visibility of the navigation bar on small devices when the
 * user clicks the hamburger icon.
 *
 * Copyright © 2021 Maxim Rebguns
 *
 * This file is part of The Blog of Maxim Rebguns.
 *
 * The source code of this website is free software: you can redistribute
 * it and/or modify it under the terms of the GNU Affero General Public
 * License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * The source code of this website is distributed in the hope that it
 * will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See
 * the GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with the source code for this website.  If not, see
 * <https://www.gnu.org/licenses/>.
 */

(function () {
  function activateToggle() {
    const toggle = document.getElementById('navigation-toggle');
    const nav = document.getElementById('navigation-bar');
    toggle.onclick = function() {
      nav.classList.toggle('nav-open');
    }
  }
  activateToggle();
})();
