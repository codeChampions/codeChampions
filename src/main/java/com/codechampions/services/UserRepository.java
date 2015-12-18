package com.codechampions.services;

import com.codechampions.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Created by Jack on 12/9/15.
 */
public interface UserRepository extends PagingAndSortingRepository<User, Integer> {
    User findOneByUsername(String username);
    List<User> findAllByAccessType(User.AccessType accessType);
}
