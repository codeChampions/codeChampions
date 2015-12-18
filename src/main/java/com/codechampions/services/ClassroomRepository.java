package com.codechampions.services;

import com.codechampions.entities.Classroom;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jack on 12/18/15.
 */
public interface ClassroomRepository extends CrudRepository<Classroom, Integer> {
}
