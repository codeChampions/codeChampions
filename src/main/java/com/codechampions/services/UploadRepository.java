package com.codechampions.services;

import com.codechampions.entities.Upload;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Jack on 12/30/15.
 */
public interface UploadRepository extends CrudRepository<Upload, Integer> {
}
