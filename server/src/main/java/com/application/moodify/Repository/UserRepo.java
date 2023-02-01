package com.application.moodify.Repository;

import com.application.moodify.Entity.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends CrudRepository<Users, Integer>{

	Users save(Users user);
	Users findByUserId(String userId);
}