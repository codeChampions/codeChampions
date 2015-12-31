package com.codechampions.services;

import com.codechampions.entities.Classroom;
import com.codechampions.entities.Upload;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Jack on 12/30/15.
 */
public interface UploadRepository extends CrudRepository<Upload, Integer> {
    List<Upload> findAllByUploadClass(Classroom uploadClass);
}
