// ========== BATCH MODEL ==========
export interface Batch {
    batchId?: number;
    batchName?: string;
    batchDuration?: number;
    batchStartDate?: Date;
    batchEndDate?: Date;
    batchVenue?: string;
    trainingMode?: string;
    trainingFor?: string;
    locationContactPerson?: string;
    locationContactPhone?: string;
    technologies?: string;
  }
  
  // ========== TRAINER MODEL ==========
  export interface Trainer {
    trainerId?: number;
    trainerName?: string;
    trainerEmail?: string;
    trainerPhone?: string;
    trainerLocation?: string;
    costPerDay?: number;
    technologics?: string;
  }
  
  // ========== VENDOR MODEL ==========
  export interface Vendor {
    vendorId?: number;
    vendorName?: string;
    vendorContactPerson?: string;
    vendorPhone?: string;
    clientName?: string;
    durationOfDays?: number;
    batchMode?: string;
    validTill?: Date;
    budgetPerDay?: number;
    subject?: string;
  }
  