var tbl = require('./tableGenerator.js');
describe('generateRows', () => {
    it('returns a single row', () => {
      // Arrange
      const dups = [
        { name: 'A', existing: 'B' , duplicate: 'C'  }
      ];
  
      // Act
      const y = tbl.generateRows(dups);
  
      // Assert
      expect(y).toEqual(['<tr><td>B</td><td>C</td></tr>']);
    });

    it('returns multiple row', () => {
        // Arrange
        const dups = [
          { name: 'A', existing: 'B' , duplicate: 'C'  },
          { name: 'A', existing: 'B' , duplicate: 'C'  }
        ];
    
        // Act
        const y = tbl.generateRows(dups);
    
        // Assert
        expect(y).toEqual(['<tr><td>B</td><td>C</td></tr>', '<tr><td>B</td><td>C</td></tr>']);
      });
  });


  describe('makeTable', () => {
    it('returns table with single row', () => {
      // Arrange
      const dups = [
        { name: 'A', existing: 'B' , duplicate: 'C'  }
      ];
  
      // Act
      const y = tbl.makeTable(dups);
  
      // Assert
      expect(y)
      .toEqual('<table><thead><tr><th>Location</th><th>Duplicate Location</th></tr></thead><tbody><tr><td>B</td><td>C</td></tr></tbody></table>');
    });

    it('returns table with multiple rows', () => {
        // Arrange
        const dups = [
          { name: 'A', existing: 'B' , duplicate: 'C'  },
          { name: 'A', existing: 'B' , duplicate: 'C'  }
        ];
    
        // Act
        const y = tbl.makeTable(dups);
    
        // Assert
        expect(y)
        .toEqual('<table><thead><tr><th>Location</th><th>Duplicate Location</th></tr></thead><tbody><tr><td>B</td><td>C</td></tr><tr><td>B</td><td>C</td></tr></tbody></table>');
      });

});