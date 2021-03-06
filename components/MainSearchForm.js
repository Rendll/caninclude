const { html, Component } = require('htm/preact');
const ColorText = require('./ColorText');
const SwapButton = require('./SwapButton');

class MainSearchForm extends Component {
    render({ parent = '', child = '', show = true, specVersion }) {
        return show && html`
        <section class="search">
            <h1 class="search__title">Check when a tag can be included in another tag</h1>
            <form id="search" autocomplete="off" class="search__form" action="/can/include/" method="get">
                <label class="head head--big" for="child"><${ColorText}>Can I Include*</${ColorText}></label>
                <p class="search__spec-version"><span class="head head--small">Based on HTML spec | Last Updated ${specVersion}</span></p><br/>
                <div class="search__container">
                    <input autofocus type="text" id="child" name="child" autocomplete="off" placeholder="Child tag name" value="${child.toLowerCase()}"/>
                    <${SwapButton}/>
                    <input type="text" id="parent" name="parent" autocomplete="off" placeholder="Parent tag name" value="${parent.toLowerCase()}"/>
                    <button class="search__button search__button--accent" type="submit">?</button>
                </div>
            </form>
        </section>`;
    }
}

module.exports = MainSearchForm;