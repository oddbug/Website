// With the help of video tutorial https://www.youtube.com/watch?v=b_x3kzapvcI
class journalEntry extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.innerHTML = `
            <div class="left">
                <div id="calendar" class="box">a</div>
            </div>
            <div class="center">b</div>
            <div class="right">c</div>
        `
    }

    
}
customElements.define("journal-entry", journalEntry);