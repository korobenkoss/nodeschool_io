function getDependencies(tree, result) {
    // pass the array up the stack
    result = result || [];

    // if tree exists, and has dependencies -> assign them; otherwise assign empty array
    let dependencies = tree && tree.dependencies || [];

    Object.keys(dependencies).forEach((dep) => {
        let key = dep + '@' + dependencies[dep].version;
        if(result.indexOf(key) === -1) result.push(key);
        getDependencies(tree.dependencies[dep], result);
    });

    return result.sort();
}

module.exports = getDependencies