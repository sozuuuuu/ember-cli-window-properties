import WinProps from '../objects/win-props';

export function initialize(container, app) {
  let winProps = WinProps.create(container.lookupFactory('config:environment').windowProperties);

  container.register('object:winProps', winProps, {instantiate: false});
  container.injection('controller', 'winProps', 'object:winProps');
  container.injection('view', 'winProps', 'object:winProps');
}

export default {
  name: 'inject',
  initialize: initialize
};
