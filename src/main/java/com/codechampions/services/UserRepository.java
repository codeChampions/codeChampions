package com.codechampions.services;

import com.codechampions.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Jack on 12/9/15.
 */
public interface UserRepository extends CrudRepository<User, Integer> {
    User findOneByUsername(String username);
}