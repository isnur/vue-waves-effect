/**
 * @author: Isnur MSM <isnurmsm@gmail.com>
 * @tutorial: https://isnur.github.io/vue-waves-effect/
 */
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
                const classes = Object.keys(binding.modifiers).map(function (val) {
                    return `waves-${val}`;
                });
                Waves.attach(el, classes);
            },
            bind (el, binding, vnode, oldVnode) {
                if (binding.arg === 'hover') {
                    el.addEventListener('mouseenter', function () {
                        if (el.tagName === 'IMG' || el.tagName === 'INPUT') {
                            Waves.ripple(el.parentElement, {
                                wait: 0
                            });
                        } else {
                            Waves.ripple(el, {
                                wait: 0
                            });
                        }
                    });
                }
            },
            unbind (el, binding, vnode, oldVnode) {
                try {
                    document.querySelectorAll('.waves-ripple').forEach(e => e.remove());
                } catch (e) {

                }
            },
            componentUpdated (el, binding, vnode, oldVnode) {
                try {
                    document.querySelectorAll('.waves-ripple').forEach(e => e.remove());
                } catch (e) {
                    
                }
            }
        });
    }
};