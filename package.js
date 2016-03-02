Package.describe({
    name: 'sekmet:fullcalendar',
    summary: "Full-sized drag & drop event calendar (jQuery plugin)",
    version: "2.6.0",
    git: "https://github.com/sekmet/meteor-fullcalendar.git"
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['momentjs:moment@2.8.4'], {weak: true});
    api.use(['templating'], 'client');
    api.addFiles([
        'fullcalendar/dist/fullcalendar.js',
        'fullcalendar/dist/fullcalendar.css',
        'fullcalendar/dist/lang-all.js',
        'fullcalendar/dist/gcal.js',
        'template.html',
        'template.js'
    ], 'client');
});
