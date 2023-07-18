/* WHAT A HACK ;( */
var title = new Map([
    ['Block_II/A/binder_lisa/ticktack', 'Lisa Binder: Tick Tack'],
    ['Block_II/A/aichner_bastian/ticktack', 'Bastian Aichner: Tick Tack'],
    ['Block_II/A/domberger_ludwig/ticktack', 'Ludwig Domberger: Tick Tack']
]);
var ffw = new Map([
    ['Block_II/A/binder_lisa/ticktack', 'Block_II/A/aichner_bastian/ticktack'],
    ['Block_II/A/aichner_bastian/ticktack', 'Block_II/A/domberger_ludwig/ticktack'],
    ['Block_II/A/domberger_ludwig/ticktack', 'Block_II/A/binder_lisa/ticktack']
]);
var rew = new Map([
    ['Block_II/A/binder_lisa/ticktack', 'Block_II/A/domberger_ludwig/ticktack'],
    ['Block_II/A/aichner_bastian/ticktack', 'Block_II/A/binder_lisa/ticktack'],
    ['Block_II/A/domberger_ludwig/ticktack', 'Block_II/A/aichner_bastian/ticktack']
]);
