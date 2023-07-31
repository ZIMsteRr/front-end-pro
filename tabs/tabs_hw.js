'use strict'

class Tabs {
    static ACTIVE_TAB_CLASS = 'active';

    constructor(selector) {
        this.tabsElement = document.querySelector(selector);
        if (!this.tabsElement) {
            console.error(`Element with selector "${selector}" not found.`);
            return;
        }

        this.tabsItems = Array.from(this.tabsElement.querySelector('nav').children);
        this.tabsContentItems = Array.from(this.tabsElement.querySelector('div').children);

        this.bindStyles();
        this.bindEvents();
        this.showTab(0);
    }

    bindStyles() {
        this.tabsItems.forEach((tab, index) => {
            const content = this.tabsContentItems[index];

            tab.classList.add(Tabs.ACTIVE_TAB_CLASS);
            content.classList.add(Tabs.ACTIVE_TAB_CLASS);
        });
    }

    bindEvents() {
        this.tabsElement.addEventListener('click', this.onTabsElementClick.bind(this));
    }

    onTabsElementClick(e) {
        const target = e.target;
        const tabEl = this.findTabEl(target);

        if (tabEl) {
            const tabIndex = this.tabsItems.indexOf(tabEl);
            this.showTab(tabIndex);
        }
    }

    findTabEl(el) {
        return el.closest('button');
    }

    showTab(indexToShow) {
        this.tabsContentItems.forEach((content, index) => {
            if (index === indexToShow) {
                content.classList.add(Tabs.ACTIVE_TAB_CLASS);
                this.tabsItems[index].classList.add(Tabs.ACTIVE_TAB_CLASS);
            } else {
                content.classList.remove(Tabs.ACTIVE_TAB_CLASS);
                this.tabsItems[index].classList.remove(Tabs.ACTIVE_TAB_CLASS);
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const tabs = new Tabs('#tabs');
});