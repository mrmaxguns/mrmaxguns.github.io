/*
 * Animate the subtitle of the website with various adjectives describing
 * me.
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
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function sleep_random() {
    return sleep(
      Math.floor(Math.random() * 100) + 200
    );
  }

  /* Animate the subtitle with various nouns describing me. */
  async function animateSubtitle() {
    const subtitle = document.getElementById('subtitle-whoami');
    const nouns = [
      'a programmer',
      'a developer',
      'an aviation enthusiast',
      'a mountain biker',
      'a pythonista',
      'an inventor',
    ];

    let previousNoun = '';
    let currentNoun = '';

    while (true) {
      // Wait a little longer so the user has time to read the
      // new noun. This is at the top of the loop to give the
      // user the time to read the originally loaded text in
      // the HTML.
      await sleep(1000);

      // Delete any text that was there already.
      while (subtitle.innerText) {
        subtitle.innerText = subtitle.innerText.slice(0, -1);
        await sleep_random();
      }

      // Add a random noun from the nouns list.
      while (currentNoun == previousNoun) {
        currentNoun = nouns[Math.floor(Math.random() * nouns.length)];
      }

      // Type the new noun in.
      for (let char of currentNoun) {
        subtitle.innerText += char;
        await sleep_random();
      }

      previousNoun = currentNoun;
    }
  }

  animateSubtitle();
})();
