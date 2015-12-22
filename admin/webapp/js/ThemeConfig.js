
export default function themeConfig($mdThemingProvider) {
    "ngInject";
    // Extend the red theme with a few different colors
    var neonRedMap = $mdThemingProvider.extendPalette('blue-grey', {
        '500': '2B5263'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('blue-grey', neonRedMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
}

