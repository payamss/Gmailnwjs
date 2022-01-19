const win = nw.Window.get();

let tray = new nw.Tray({
    title: 'Gmail App',
    icon: 'icon.png'
});
// Get the minimize event
win.on('minimize', function () {
    // Hide window
    nw.Window.get().hide();

});
tray.on('click', function () {
    win.show();
    menu = new nw.Menu();

    // this.remove();
    // tray = null;
});
let menu = new nw.Menu();

menuItems = [
    // {
    //     type: 'checkbox',
    //     label: 'Checkbox',
    //     checked: itemChecked,
    //     click: function () {
    //         itemChecked = !itemChecked;
    //         console.log(itemChecked);
    //     }
    // },
    {
        type: 'normal',
        label: 'Open Dev Tools',
        click: function () {
            nw.Window.get().showDevTools();
        }
    },
    {
        type: 'normal',
        label: 'Show Window',
        click: function () {
            nw.Window.get().show();
        }
    },
    // {
    //     type: 'normal',
    //     label: 'Hide Window',
    //     click: function () {
    //         nw.Window.get().hide();
    //     }
    // },
    {
        type: 'separator'
    },
    {
        type: 'normal',
        label: 'Exit',
        click: function () {
            nw.Window.get().close();
        }
    }
];

menuItems.forEach(function (item) {
    menu.append(new nw.MenuItem(item));
});

tray.menu = menu;