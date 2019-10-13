/**
 * @author: Isnur MSM <isnurmsm@gmail.com>
 * @tutorial: https://isnur.github.io/vue-waves-effect/
 */
import 'node-waves/src/sass/waves.sass';
var Waves = require('node-waves');

export default {
    name: 'waves',
    config: {},
    install (Vue, options) {
        Vue.mixin({
          created: function () {
            Waves.init(options);
          }
        });
        Vue.directive('waves', {
            inserted (el, binding, vnode, oldVnode) {
                const classes = Object.keys(binding.modifiers).map(function(val) {
                    return `waves-${val}`;
                });
                Waves.attach(el, classes);
            },
            unbind (el, binding, vnode, oldVnode) {
                Waves.calm(el);
            }
        });
    }
};