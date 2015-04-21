export default Ember.Object.extend({
    $win: $(window),

    // Default Values
    //----------------

    height: null,
    width: null,
    isSmartphone: null,
    smartphoneWidth: 768,

    init() {
      this._super();
      this.saveWinProps();
      this.checkDevice();
      this.addObserver('width', this, this.checkDevice);
      this.watchWindowResizing();
    },

    watchWindowResizing: function() {
      this.get('$win').on('resize', () => {
        Ember.run.debounce(this, this.saveWinProps, 500, false);
      });
    },

    saveWinProps() {
      this.set('width', this.get('$win').width());
      this.set('height', this.get('$win').height());
    },

    checkDevice: function() {
      if (this.get('width') > this.get('smartphoneWidth')) {
        this.set('isSmartphone', false);
      } else {
        this.set('isSmartphone', true);
      }
    }
});
