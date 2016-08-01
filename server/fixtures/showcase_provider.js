import ShowcaseDataFactory from './showcase_data';
import RandomColor from 'just.randomcolor';

const ShowcaseData = ShowcaseDataFactory.buildShowcase();
const Tab = ShowcaseDataFactory.buildTab();
ShowcaseData.tabs.push(Tab);
ShowcaseData.activeTab = Tab;
Tab.resources.push(ShowcaseDataFactory.buildTabResourceWithResults(500));

Tab.resources.forEach(function (resource) {
  resource.results.forEach(function (result) {
    result.title = 'Card' + result.id;
    result.colorTop = new RandomColor().toHex().toCSS();
    result.colorBottom = new RandomColor().toHex().toCSS();
  })
});

export default ShowcaseData;
