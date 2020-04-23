export default class Page {

    open(path) {
        browser.setWindowSize(1600, 900)
        browser.url(path)
    }
}