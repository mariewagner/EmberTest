/**
 * Created by Marie on 1/26/2015.
 */
window.Todos = Ember.Application.create();

Todos.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'todos-emberjs'
});

