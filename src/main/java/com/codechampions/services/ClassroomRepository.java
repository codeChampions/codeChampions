package com.codechampions.services;

import com.codechampions.entities.Classroom;
import com.codechampions.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Jack on 12/18/15.
 */
public interface ClassroomRepository extends CrudRepository<Classroom, Integer> {
    List<Classroom> findAllByOwner(User owner);
}
