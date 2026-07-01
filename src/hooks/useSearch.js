import { useState, useEffect } from 'react';
import { treatments } from '../data/treatments';
import { doctors } from '../data/doctors';
import { branches } from '../data/branches';
import { blogs } from '../data/blogs';

export const useSearch = (query) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResults([]);
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const searchMatches = [];

    // 1. Search Treatments
    treatments.forEach((t) => {
      if (
        t.title.toLowerCase().includes(cleanQuery) ||
        t.shortTitle.toLowerCase().includes(cleanQuery) ||
        t.tagline.toLowerCase().includes(cleanQuery)
      ) {
        searchMatches.push({
          type: 'treatment',
          id: t.id,
          title: t.title,
          subtitle: t.tagline,
          url: `/treatments/${t.id}`,
        });
      }
    });

    // 2. Search Doctors
    doctors.forEach((d) => {
      if (
        d.name.toLowerCase().includes(cleanQuery) ||
        d.qualification.toLowerCase().includes(cleanQuery) ||
        d.specialization.toLowerCase().includes(cleanQuery)
      ) {
        searchMatches.push({
          type: 'doctor',
          id: d.id,
          title: d.name,
          subtitle: d.specialization,
          url: `/doctors/${d.id}`,
        });
      }
    });

    // 3. Search Branches
    branches.forEach((b) => {
      const matchArea = b.areasServed.some((area) => area.toLowerCase().includes(cleanQuery));
      if (
        b.name.toLowerCase().includes(cleanQuery) ||
        b.address.toLowerCase().includes(cleanQuery) ||
        matchArea
      ) {
        searchMatches.push({
          type: 'branch',
          id: b.id,
          title: b.name,
          subtitle: `${b.city} • Serves: ${b.areasServed.slice(0, 3).join(', ')}`,
          url: `/branches/${b.id}`,
        });
      }
    });

    // 4. Search Blogs
    blogs.forEach((post) => {
      if (
        post.title.toLowerCase().includes(cleanQuery) ||
        post.summary.toLowerCase().includes(cleanQuery)
      ) {
        searchMatches.push({
          type: 'blog',
          id: post.id,
          title: post.title,
          subtitle: post.category,
          url: `/blog/${post.id}`,
        });
      }
    });

    setResults(searchMatches.slice(0, 8)); // limit to 8 matches
  }, [query]);

  return results;
};
export default useSearch;
