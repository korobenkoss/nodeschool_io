function loadUsers(userIds, load, done) {
	var users = [];
	var usersLoaded = 0;
	userIds.forEach((id, index) => {
		load(id, (user) => {
			users[index] = user
			if (++usersLoaded === userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers