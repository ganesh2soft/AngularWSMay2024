import { Component, OnInit } from '@angular/core';
import { SpringbootbackendService } from '../springbootbackend.service'; // import your service
import { Batch } from '../models/allinone.model'; // assuming you have a model for Batch
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
  imports: [CommonModule, FormsModule], 
  standalone: true // This makes the component standalone
})
export class BatchComponent implements OnInit {

  batches: Batch[] = [];
  batch: Batch = {}; // Initial empty object
  editingBatch: Batch | null = null;

  constructor(private backendService: SpringbootbackendService) {}

  ngOnInit(): void {
    this.getAllBatches();
  }

  getAllBatches(): void {
    this.backendService.getAllBatches().subscribe(
      (data: Batch[]) => this.batches = data,
      error => console.error('Error loading batches', error)
    );
  }

  addBatch(): void {
    this.backendService.addBatch(this.batch).subscribe(
      (newBatch: Batch) => {
        this.batches.push(newBatch);
        this.resetForm();
      },
      error => console.error('Error adding batch', error)
    );
  }

  editBatch(batch: Batch): void {
    this.editingBatch = { ...batch };
    this.batch = this.editingBatch;
  }

  updateBatch(): void {
    if (!this.batch.batchId) return;
    this.backendService.addBatch(this.batch).subscribe(
      (updatedBatch: Batch) => {
        const index = this.batches.findIndex(b => b.batchId === updatedBatch.batchId);
        if (index !== -1) {
          this.batches[index] = updatedBatch;
        }
        this.resetForm();
      },
      error => console.error('Error updating batch', error)
    );
  }

  deleteBatch(batchId: number): void {
    if (confirm('Are you sure you want to delete this batch?')) {
      this.backendService.deleteBatch(batchId).subscribe(
        (response) => {
          this.batches = this.batches.filter(batch => batch.batchId !== batchId);
          alert('Batch deleted successfully');
        },
        (error) => {
          console.error('Error deleting batch', error);
          alert('Error deleting batch');
        }
      );
    }
  }
  

  resetForm(): void {
    this.batch = {};
    this.editingBatch = null;
  }
}