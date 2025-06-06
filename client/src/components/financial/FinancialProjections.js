import React from 'react';
import { Container, Typography, Paper, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const FinancialProjections = () => {
  const projections = [
    { year: 2024, revenue: 1000000, expenses: 800000, profit: 200000 },
    { year: 2025, revenue: 2500000, expenses: 1500000, profit: 1000000 },
    { year: 2026, revenue: 5000000, expenses: 3000000, profit: 2000000 },
  ];

  return (
    <Container sx={{ 
      mt: 4, 
      mb: 4, 
      minHeight: '100vh', 
      py: 4,
      px: { xs: 2, sm: 3, md: 4 },
      background: 'linear-gradient(135deg, #0a1929 0%, #1a237e 50%, #283593 100%)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Financial Projections
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>5-Year Financial Projections</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Year</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                    <TableCell align="right">Expenses</TableCell>
                    <TableCell align="right">Profit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projections.map((row) => (
                    <TableRow key={row.year}>
                      <TableCell>{row.year}</TableCell>
                      <TableCell align="right">${row.revenue.toLocaleString()}</TableCell>
                      <TableCell align="right">${row.expenses.toLocaleString()}</TableCell>
                      <TableCell align="right">${row.profit.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Key Metrics</Typography>
            <Typography paragraph>
              • Gross Margin: 60%
              • Operating Margin: 25%
              • Customer Acquisition Cost: $5,000
              • Lifetime Value: $50,000
              • Break-even Point: Q3 2024
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default FinancialProjections; 